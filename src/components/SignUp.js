const SignUp = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        console.log(email.value, password.value);
    }
    return (
        <>
            <h1>ユーザー登録</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>E-mail</label>
                    <input name="email" type="email" placeholder="email" />
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" type="password" placeholder="password" />
                </div>
                <div>
                    <button>登録</button>
                </div>
            </form>
        </>
    );
};

export default SignUp;