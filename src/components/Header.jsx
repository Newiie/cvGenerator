import './Header.css'
import ToggleButton from './ToggleButton'

export default function Header() {
    return (
        <>
        <div className='hero-header-container'>
            <div className="hero-header">
                <h1 className="hero-title">cv generator</h1>
                <ToggleButton />
            </div>
            <div>
                <p>Create your CV by filling out the forms below! Your CV will be dynamically updated in the preview.</p>
                <a href="#">Check out the Github repo for this project here</a>
            </div>
        </div>
        </>
    )
}