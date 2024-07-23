import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export function useRouter() {
    const navigate = useNavigate();

    const router = useMemo(() => {
        const back = () => navigate(-1);
        const forward = () => navigate(1);
        const reload = () => window.location.reload();
        const push = (href: string) => navigate(href);
        const replace = (href: string) => navigate(href, { replace: true });

        return { back, forward, reload, push, replace };
    }, [navigate]);

    return router;
}
