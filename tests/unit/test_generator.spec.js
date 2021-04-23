
import {generator} from '../../src/course_generator/generator.js'
describe('testing generator function',()=>{
    test('valid timetable',()=>{
        expect(generator({
            0:['S1','S2','S6','S7'],
            1:['S1','S7'],
            2:['S1','S2','S3','S4'],
            3:['S1','S2','S7'],
            4:['S8'],
            5:['S7'],
            6:['L15'],})).toMatchObject(
                {
                    0:expect.stringMatching(/(L|S)[1-9][0-6]?/),
                    1:expect.stringMatching(/(L|S)[1-9][0-6]?/),
                    2:expect.stringMatching(/(L|S)[1-9][0-6]?/),
                    3:expect.stringMatching(/(L|S)[1-9][0-6]?/),
                    4:expect.stringMatching(/(L|S)[1-9][0-6]?/),
                    5:expect.stringMatching(/(L|S)[1-9][0-6]?/),
                    6:expect.stringMatching(/(L|S)[1-9][0-6]?/)})
    
    })

    test('invalid timetable',()=>{
        expect(generator({
            0:['S1','S7'],
            1:['S1','S7'],
            2:['S1'],
            })).toEqual({})
    
    
    })
})
