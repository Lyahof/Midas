import { useUser } from "../features/authentication/useUser";

function ProtectedRoute({ children }) {
  const { user, isoLoading, isAuthenticated } = useUser();

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
