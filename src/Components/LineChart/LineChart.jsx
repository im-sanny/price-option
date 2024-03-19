import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
 const subjectMarks = [
    {"id": 1, "name": "John", "mathMark": 85, "physicsMark": 78, "chemistryMark": 92},
    {"id": 2, "name": "Emma", "mathMark": 72, "physicsMark": 80, "chemistryMark": 85},
    {"id": 3, "name": "Michael", "mathMark": 90, "physicsMark": 88, "chemistryMark": 75},
    {"id": 4, "name": "Sophia", "mathMark": 78, "physicsMark": 82, "chemistryMark": 80},
    {"id": 5, "name": "William", "mathMark": 65, "physicsMark": 70, "chemistryMark": 68},
    {"id": 6, "name": "Olivia", "mathMark": 88, "physicsMark": 85, "chemistryMark": 90},
    {"id": 7, "name": "James", "mathMark": 92, "physicsMark": 95, "chemistryMark": 87},
    {"id": 8, "name": "Amelia", "mathMark": 70, "physicsMark": 68, "chemistryMark": 72},
    {"id": 9, "name": "Benjamin", "mathMark": 83, "physicsMark": 75, "chemistryMark": 78},
    {"id": 10, "name": "Ava", "mathMark": 75, "physicsMark": 80, "chemistryMark": 82}
  ]
  
      
      
    return (
        <div>
            <LChart width={800} height={400} data={subjectMarks}>
                <XAxis dataKey="name"></XAxis>
                <YAxis dataKey=""></YAxis>
                <Line dataKey="mathMark" stroke='yellow'></Line>
                <Line dataKey="physicsMark" stroke='red'></Line>
                <Line dataKey="chemistryMark"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;