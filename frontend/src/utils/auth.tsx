import { TokenType, UserProfile, UserState } from "interfaces";
import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const LOCAL_STORAGE_AUTH_KEY = "daato-auth";

const initialState = {
  token: null,
  user: null,
};

const AuthContext = createContext(
  createContextValue({
    token: initialState.token,
    user: initialState.user,
    setState: () =>
      console.error("You are using AuthContext without AuthProvider!"),
  })
);

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { state, setState } = usePersistedAuth(initialState);

  const contextValue = useMemo(() => {
    const { token, user } = state;
    return createContextValue({ token, user, setState });
  }, [state, setState]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

function createContextValue({
  token,
  user,
  setState,
}: {
  token: TokenType;
  user: UserProfile | null;
  setState: ({
    token,
    user,
  }: {
    token: TokenType | null;
    user: UserProfile | null;
  }) => void;
}) {
  return {
    token,
    user,
    signin: ({ token, user }: { token: TokenType; user: UserProfile | null }) =>
      setState({ token, user }),
    signout: () => setState({ token: null, user: null }),
  };
}

function usePersistedAuth(defaultState: UserState) {
  const [state, setStateRaw] = useState(() => getStorageState(defaultState));
  const setState = useCallback((newState: UserState) => {
    setStateRaw(newState);
    setStorageState(newState);
  }, []);

  return { state, setState };
}

function getStorageState(defaultState: UserState) {
  if (!window.localStorage) {
    return defaultState;
  }

  const rawData = window.localStorage.getItem(LOCAL_STORAGE_AUTH_KEY);
  if (!rawData) {
    return defaultState;
  }

  try {
    const { user, token } = JSON.parse(rawData);

    if (token && user && user.username) {
      return { token, user };
    }
  } catch {}

  return defaultState;
}

function setStorageState(newState: UserState) {
  if (!window.localStorage) {
    return;
  }

  window.localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, JSON.stringify(newState));
}
