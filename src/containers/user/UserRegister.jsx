import React, {useState} from 'react'
import { userActions } from '../../modules/user.action'
import { useDispatch, useSelector } from "react-redux";
import { User } from '../../templates'

const UserRegister = () => {

    const [user, setUser] = useState({
        userid: '',
        password: '',
        name: '',
        pclass: '',
        gender: '',
        embarked: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const registering = useSelector(state => state.registration.registering);
    const dispatch = useDispatch();

    // reset login status
    /*
    useEffect(() => {
        dispatch(userActions.logout());
    }, [])
    */

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (user.userid && user.password && user.name) {
            dispatch(userActions.register(user));
        }
    }

    
    return (<User>
        <h1>UserRegister</h1>
        <form name="form" onSubmit={handleSubmit}>
        <table className='tab_layer'>
            
                <tr>
                    <td>ID</td>
                    <td>
                        <input type="text" name="userId" value={user.userId} onChange={handleChange} 
                        className={'form-control' + (submitted && !user.userId ? ' is-invalid' : '')} />
                        {submitted && !user.firstName &&
                            <div className="invalid-feedback">User ID is required</div>
                        }

                    </td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td>
                        <input type="password" name="password" value={user.password} onChange={handleChange} className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')} />
                        {submitted && !user.password &&
                            <div className="invalid-feedback">Password is required</div>
                        }
                    </td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>
                        <input type="text" name="name" value={user.name} onChange={handleChange} className={'form-control' + (submitted && !user.name ? ' is-invalid' : '')} />
                        {submitted && !user.name &&
                            <div className="invalid-feedback">User Name is required</div>
                        }

                    </td>
                </tr>
                <tr>
                    <td>Pclass</td>
                    <td>
                        <input type="text" name="pclass" value={user.pclass} onChange={handleChange}  />
                    </td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>
                        <input type="text" name="gender" value={user.gender} onChange={handleChange} />
                    </td>
                </tr>
                <tr>
                    <td>Embarked</td>
                    <td>
                        <input type="text" name="password" value={user.password} onChange={handleChange} />
                    </td>
                </tr>
                <tr>
                    <td colspan={2}><button onClick={userActions.register}>Register</button>
                    <button>Cancel</button></td>
                </tr>
            
        </table></form>
    </User>)
}

export default UserRegister