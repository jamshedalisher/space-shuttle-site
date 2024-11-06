
        async function fetchAllData() {
            try {
                // Use Promise.all to make all three fetch requests simultaneously
                const [usersResponse, todosResponse, photosResponse] = await Promise.all([
                    fetch('https://jsonplaceholder.typicode.com/users'),
                    fetch('https://jsonplaceholder.typicode.com/todos'),
                    fetch('https://jsonplaceholder.typicode.com/photos')
                ]);
        
                // Parse the responses as JSON
                const users = await usersResponse.json();
                const todos = await todosResponse.json();
                const photos = await photosResponse.json();
        
                // Log the results
                console.log('Users:', users);
                console.log('Todos:', todos);
                console.log('Photos:', photos);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        
        // Call the async function
        fetchAllData();        