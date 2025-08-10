
import AddStudent from "./components/AddStudent";
import DeleteStudent from "./components/DeleteStudent";
import GetStudents from "./components/GetStudents";
import UpdateStudent from "./components/UpdateStudent";
import ReplaceStudent from "./components/ReplaceStudent";


function App() {

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-md p-6 space-y-6">
                <h1 className="text-3xl font-bold text-center text-indigo-600">
                    Student Management System
                </h1>
                <GetStudents />
                <AddStudent />
                <ReplaceStudent />
                <UpdateStudent />
                <DeleteStudent />
            </div>
        </div>
    )

}

export default App