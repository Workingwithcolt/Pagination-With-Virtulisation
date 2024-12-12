import { useRef, useState } from 'react';
import { Virtuoso } from 'react-virtuoso';
import { UserCard } from './UserCard';

function createUsers(from = 0, to = 100000) {
    return Array.from({ length: to - from }, (_, i) => ({
        id: i + from,
        name: `User ${i + from}`,
        searchString: generateRandomStringWithSpaces(Math.floor(Math.random() * 10))
    }));
}


function generateRandomStringWithSpaces(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
    return Array.from({ length }, () =>
        chars.charAt(Math.floor(Math.random() * chars.length))
    ).join('');
}

export function Parent({ setData, users }) {
    const [isLoading, setIsLoading] = useState(false);
    const virtuosoRef = useRef(null);

    async function fetchNextPage() {
        const newUsers = createUsers(users.length, users.length + 1000);

        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 100));
        setIsLoading(false);

        // Use flatMap to combine users and newUsers
        setData((prevUsers) => prevUsers.flatMap((user) => [user]).concat(newUsers));
        for (let i = 0; i < users.length; i++) {
            console.log(i)
        }
    }

    console.log(users)
    return (
        <div>
            <button
                className="mb-4"
                onClick={() => {
                    virtuosoRef?.current?.scrollToIndex({
                        index: Math.random() * users.length,
                        align: 'start',
                        behavior: 'smooth',
                    });
                }}
            >
                Scroll
            </button>
            <div style={{
                display: 'flex',
                flexDirection: "column"
            }}>
                {
                    users.map(element => {
                        return <UserCard user={element} />
                    })
                }
            </div>
            <button onClick={()=>fetchNextPage()}>increment</button>
            {users.length}
            {/* <Virtuoso
                ref={virtuosoRef}
                style={{height:'500px'}}
                data={users}
                endReached={fetchNextPage}
                itemContent={(_, user) => <UserCard user={user} />}
                components={{
                    Footer: isLoading
                        ? () => <div className="bg-grayscale-700">Loading...</div>
                        : undefined,
                }}
            /> */}
        </div>
    );
}
