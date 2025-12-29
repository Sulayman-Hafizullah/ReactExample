import userService, {User} from "../services/user-service";
import {useEffect, useState} from "react";
import {CanceledError} from "../services/api-client";

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const controller = new AbortController();
        // get-> await promise -> res / err
        setIsLoading(true);
        const {request, cancel} = userService.getAllUsers()
        request.then(response => {
            setIsLoading(false);
            setUsers(response.data)
        })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)
                setIsLoading(false);
            });

        return () => cancel();
    }, [])

    return {users, isLoading, error, setUsers, setError};
}
export default useUsers;