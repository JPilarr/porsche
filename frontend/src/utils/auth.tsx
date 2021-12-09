import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const LOCAL_STORAGE_AUTH_KEY = "premas-auth";

type UserType = any;

type TokenType = string | null;

type StateType = any;

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

export function AuthProvider({ children }: any) {
  const [state, setState] = usePersistedAuth(initialState);

  const contextValue = useMemo(() => {
    const { token, user } = state;
    return createContextValue({ token, user, setState });
  }, [state, setState]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

function createContextValue({
  token,
  user,
  setState,
}: {
  token: TokenType;
  user: UserType;
  setState: ({ token, user }: { token: TokenType; user: UserType }) => void;
}) {
  return {
    token,
    user,
    signin: ({ token, user }: { token: TokenType; user: UserType }) =>
      setState({ token, user }),
    signout: () => setState({ token: null, user: null }),
  };
}

function usePersistedAuth(defaultState: StateType) {
  const [state, setStateRaw] = useState(() => getStorageState(defaultState));

  const setState = useCallback((newState) => {
    setStateRaw(newState);
    setStorageState(newState);
  }, []);

  return [state, setState];
}

function getStorageState(defaultState: StateType) {
  if (!window.localStorage) {
    return defaultState;
  }

  const rawData = window.localStorage.getItem(LOCAL_STORAGE_AUTH_KEY);
  if (!rawData) {
    return defaultState;
  }

  try {
    const { user, token } = JSON.parse(rawData);

    if (token && user && user.email && user.firstName) {
      return { token, user };
    }
  } catch {}

  return defaultState;
}

function setStorageState(newState: StateType) {
  if (!window.localStorage) {
    return;
  }

  window.localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, JSON.stringify(newState));
}
