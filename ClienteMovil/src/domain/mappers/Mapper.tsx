export abstract class Mapper<I, O> {
  abstract mapFrom(param: I): O;

  abstract mapTo(param: O): I;

  mapArrayFrom(params: I[]): O[] {
    return params.map((param) => this.mapFrom(param));
  }

  mapArrayTo(params: O[]): I[] {
    return params.map((param) => this.mapTo(param));
  }
}
