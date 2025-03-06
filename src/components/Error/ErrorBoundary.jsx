import { Children } from "react";
import { useErrorBoundary } from "../../Hooks/useErrorBoundary";


export const ErrorBoundary = ({ Children }) => {
    const { ErrorBoundary } = useErrorBoundary();

    return (
        <ErrorBoundary>
            {Children}
        </ErrorBoundary>
    )
}