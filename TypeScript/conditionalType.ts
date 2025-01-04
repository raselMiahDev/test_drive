type IsString<T> = T extends string?true:false;
type Test1 = IsString<string>;
type Test2 = IsString<number>;
