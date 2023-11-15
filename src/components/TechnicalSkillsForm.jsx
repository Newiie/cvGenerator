
export default function TechnicalSkillsForm() {
    return (
        <form action="" className='form-body text-clr'>
            <h1 className="form-header">Technical Skills</h1>
            <p>Showcase the most relevant skills applicable to the job you&apos;re applying for</p>
            <label htmlFor="ts-skill" className="formLabel">
                <span className='text'>Add a skill category</span>
                <input type="text" id='ts-skill' name='ts-skill' placeholder="Design" />
            </label>
           <button type="submit" className="buttonSubmit">Submit skill info</button>
        </form>
    );
}