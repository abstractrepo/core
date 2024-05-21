export type Functions<TType> = () => TType;

export type LazyImportBase<TType> = Functions<Promise<TType>>;

export type LazyImportConfig<TType> = TType | LazyImportBase<TType>;

export type FunctionsConfig<TType> = TType | Functions<TType>;
