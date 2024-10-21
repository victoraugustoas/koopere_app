import {Container} from 'inversify';
import {DependenciInjection} from '../dependency_injection';

export class InversifyDIProvider implements DependenciInjection {
  private static instance: InversifyDIProvider;
  private container: Container;

  private constructor() {
    this.container = new Container({defaultScope: 'Singleton'});
  }

  // return singleton
  static get(): InversifyDIProvider {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new InversifyDIProvider();
    return this.instance;
  }

  putIfAbsent<T>(token: symbol, instance: T): T {
    if (!this.container.isBound(token)) {
      this.container.bind<T>(token).toConstantValue(instance);
    }
    return this.find<T>(token);
  }
  find<T>(token: symbol): T {
    return this.container.get<T>(token);
  }
}
