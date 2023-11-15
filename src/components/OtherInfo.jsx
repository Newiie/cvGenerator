
export default function OtherInfo() {
    return (
        <form action="" className='form-body text-clr'>
            <h1 className="form-header">Other Info</h1>
            <p>Only fill this out if it&apos;s important to the job you&apos;re applying for or if your CV still has space in the preview</p>
            <label htmlFor="oi-info" className="formLabel">
                <span className='text'>Add a skill category</span>
                <input type="text" id='oi-info' name='oi-info' placeholder="Languages" />
            </label>
           <button type="submit" className="buttonSubmit">Submit info</button>
        </form>
    )
}