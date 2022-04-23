import React, { useState } from 'react';
import { getFirebase } from "../../firebase";
import { animated, useSpring } from 'react-spring';
import { AiOutlineLoading } from 'react-icons/ai'

const [loading, setLoading]  = useState(true);
const [blogPosts, setBlogPosts] = useState([]);

if (loading && !blogPosts.length) {
    getFirebase()
        .database()
        .ref("/posts")
        .orderByChild("dateCreated")
        .once("value")
        .then(snapshot => {
            let posts = [];
            const ssVal = snapshot.val();
            for (let slug in ssVal) {
                posts.push(ssVal[slug]);
            }

            const orderByNewest = posts.reverse();
            setBlogPosts(orderByNewest);
            setLoading(false);
        });
}

function LoopLoad() {
    const props = useSpring({
      loop: true,
      from: { rotateZ: 0 },
      to: { rotateZ: 360 },
    })
  
    return (
      <animated.span style={props}><AiOutlineLoading /></animated.span>
    )
}

if (loading) {
    LoopLoad();
}