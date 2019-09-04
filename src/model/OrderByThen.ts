        
import Querbel from '../Tools/Queryable';
import Student from '../interface/student';

export default function showOrderByThen(){
    let stu: Querbel<Student> = new Querbel<Student>();
    stu.Add(new Student(1000, 11, '地上', '周政', 1, ['火影忍者', '海贼王', '三国演义']));
    stu.Add(new Student(1001, 12, '地上', '小明', 0, ['火影忍者', '海贼王', '三国演义']));
    stu.Add(new Student(1002, 15, '天上', '上帝', 1, ['火影忍者', '海贼王', '三国演义']));
    stu.Add(new Student(1003, 10, '天上', '小红', 0, ['火影忍者', '海贼王', '三国演义']));
    return stu;
}