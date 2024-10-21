import {useEffect, useState} from 'react';
import {Initializer} from '../global/initializer';

export function useInitializer() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function initializer() {
      setLoading(true);
      await new Initializer().initialize();
      setLoading(false);
    }
    initializer();
  }, []);

  return loading;
}
