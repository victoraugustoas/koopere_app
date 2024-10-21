export abstract class DependenciInjection {
  abstract putIfAbsent<T>(token: symbol, instance: T): T;
  abstract find<T>(token: symbol): T;
}
