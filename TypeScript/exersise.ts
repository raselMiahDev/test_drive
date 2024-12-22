interface User{
    id: number;
    name: string;
    email?: string; // optional
}
interface Popular{
    yes: boolean;   // popular or not
}
type Admin = User & Popular & {role: string}; // type alias

function createAdmin(admin:Admin){
    return `Welcome ${admin.name}! You are an ${admin.role}`; // Welcome Rasel! You are an Admin
}

const emp :Admin={id:1,name:"Rasel",role:"Admin",yes:true}; // Admin type object
createAdmin(emp); // call function
// Output: Welcome Rasel! You are an Admin
