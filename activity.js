const posts = [];



var lastTime = '';



function updateLastUserActivityTime() {

    return new Promise((resolve) => {

        setTimeout(() => {

            const currentTime = new Date().toLocaleString();

            lastActivityTime = currentTime;

            resolve(lastActivityTime);

        }, 1000);

    });

}



async function createPost(post) {

    return new Promise((resolve) => {

        setTimeout(() => {

            const currentTime = new Date().toLocaleString();

            const newPost = { title: post };

            posts.push(newPost);

            resolve();

        }, 0);

    });

}



async function deletePost(){

    return new Promise((resolve, reject) => {

        setTimeout( () => {

            if(posts.length > 0){

                const poppedElement  = posts.pop();

                resolve();

            } else {

                reject("ERROR: ARRAY IS EMPTY")

            }

        }, 0)

    })

}



function printPost() {

    posts.forEach((post) => {

        console.log(post.title)

    })



    console.log('User Last Activity Time  : ', lastTime);

}



(async () => {
    await createPost('Post 1');
    console.log('User Last Activity Time Before Creating Post : ', lastTime);

    updateLastUserActivityTime();
    console.log('User Last Activity Time After Creating Post : ', lastTime);

    printPost();
    await createPost('Post 2');
    console.log('User Last Activity Time Before Creating Post : ', lastTime);

    updateLastUserActivityTime();
    console.log('User Last Activity Time After Creating Post : ', lastTime);

    printPost();
    await createPost('Post 3');
    printPost();
    console.log('User Last Activity Time Before Creating Post : ', lastTime);

    updateLastUserActivityTime();
    console.log('User Last Activity Time After Creating Post : ', lastTime);

    printPost();
    await deletePost();
    printPost();
})();