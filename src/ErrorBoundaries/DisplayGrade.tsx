export default function DisplayGrade(props: displayGradeProps) {
  function display(grade: number) {
    if (grade > 90) {
      return (
        <div>
          <h3>Excellent job!</h3>
        </div>
      )
    } else if (grade <= 90 && grade > 80) {
      return (
        <div>
          <h3>Well Done!</h3>
        </div>
      )
    } else if (grade <= 90 && grade > 0) {
      return (
        <div>
          <h3>Bad luck!</h3>
        </div>
      )
    } else {
      // throw 'this is impossible';
    }
  }

  return (
    <>
      {display(props.grade)}
    </>
  )
}

interface displayGradeProps {
  grade: number;
}
