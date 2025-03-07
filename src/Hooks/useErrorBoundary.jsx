import { useEffect, useState } from "react";


export const useErrorBoundary = () => {
    const [error, setError] = useState(null);

    const resetError = () => setError(null);

    const ErrorBoundary = ({ children }) => {
        useEffect(() => {
            const handleError = (event) => {
                setError(event.error);
            }

            window.addEventListener('error', handleError);

            return () => {
                window.removeEventListener('error', handleError);
            }
        }, []);

        if(error) {
            return (
                <div>
                    <h2>Algo salió mal</h2>
                    <button

                        onClick={resetError}
                    >Intenta nuevamente</button>
                </div>
            )
        }
        return children;
    }
    return { ErrorBoundary, setError };
}