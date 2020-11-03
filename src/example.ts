type TypeConcatFn = (x: string, y: string) => string;

interface Task {
    howIDoIt: string,
    simeArray: (string | number )[],
    withData?: Array<Task>,
}

interface MyArray<T> {
	[N: number]: T;

	reduce(fn: (curr: T, acc: T) => T): T;
}

const concat: TypeConcatFn = ((str1, str2) => str1 + str2);

const MyHometask: Task = {
	howIDoIt: "I Do It Wel",
	simeArray: ["string one", "string two", 42],
	withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23], }],
}

const tsArray: Array<number> = [1,2,3,4,5,6];

tsArray.reduce((curr, acc) => curr + acc);

