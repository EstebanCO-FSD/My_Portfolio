import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MIN_WIDTH = 1024;

const RedirectOnResize = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const checkScreenSize = () => {
            const isSmallScreen = window.innerWidth < MIN_WIDTH;
            const isOnMobilePage = location.pathname === "/UnderConstruction";

            if (isSmallScreen && !isOnMobilePage) {
                navigate("/UnderConstruction", { replace: true });
            } else if (!isSmallScreen && isOnMobilePage) {
                navigate("/", { replace: true });
            }
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, [location.pathname, navigate]);

    return null;
};

export default RedirectOnResize;
