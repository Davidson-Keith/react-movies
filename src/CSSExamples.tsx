// import './CSSExamples.css'; // if you import here, it will actually apply to the entire app!!!
import css from './CSSExamples.module.css'; // need to import like this for it to only apply to this file.

export default function CSSExamples() {
  const square = {
    backgroundColor: 'green',
    height: '50px',
    width: '50px',
    marginLeft: '1rem'
  };

  return (
    <>
      <h1 className="red">CSS Examples</h1>
      <div>Subtext - no style</div>
      <div style={{color: 'blue'}}>Subtext</div>
      <div style={{color: 'blue', fontSize: '25px'}}>Subtext</div>
      <div style={square}>Subtext</div>
      <div style={square}>Subtext</div>
      <div className={css['primary-color']}>Subtext</div>
      <div className={'primary-color'}>Subtext</div>
    </>
  )
}
