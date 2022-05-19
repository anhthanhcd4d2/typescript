import {checkloop3} from "./index2";

describe('checkloop3', function () {
    test('should returl true when Array', function () {
        expect(checkloop3([1,1,1,2,3,2,3,4,5,4,2,8,9,0])).toStrictEqual([{value:1,rep:3},{value: 2,rep: 3},{value: 3,rep: 2},{value: 4,rep: 2}])
    });
    test('should returl true when Array', function () {
        expect(checkloop3([1,1,-1,2,3,2,3,4,5,4,2,8,9,0])).toStrictEqual([{value:1,rep:2},{value: 2,rep: 3},{value: 3,rep: 2},{value: 4,rep: 2}])
    });
    test('should returl true when Array', function () {
        expect(checkloop3([1,1,-1,1,1,1,1,1,1,-1,1,1,1,1])).toBe([{value:1,rep:12},{value: -1,rep: 2}])
    });
});

