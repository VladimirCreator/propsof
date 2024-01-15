export type PropsOf<T> =
	T extends (...args: infer U) => unknown ?
		U extends { '0': unknown } ?
			U['0'] :
			never
	: never
