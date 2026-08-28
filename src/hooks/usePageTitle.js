import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

/**
 * usePageTitle
 * React concept: this is a custom hook — just a regular function that
 * calls other hooks, extracted so the same 3 lines aren't repeated at
 * the top of every student page.
 *
 * useOutletContext() reads the `context` value StudentLayout passed
 * into its <Outlet>. useEffect runs *after* the component renders, so
 * the title updates without ever causing this page itself to
 * re-render for no reason.
 */
function usePageTitle(title) {
  const { setPageTitle } = useOutletContext();

  useEffect(() => {
    setPageTitle(title);
  }, [title, setPageTitle]);
}

export default usePageTitle;
