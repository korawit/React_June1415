import './Hello.css';
export default function Hello({name="Joe",surname="Jack",age=20}){
    return(
    <>
    <img className="profile"
    src="Octocat.png"/>
    <h1>Hello {name}{surname}{age+10}</h1>
    </>
    );
};
