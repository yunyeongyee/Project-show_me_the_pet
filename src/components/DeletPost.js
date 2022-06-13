import React from 'react';
import axios from 'axios';

// 게시글 삭제
function DeletePost(post_num) {
    if (window.confirm('해당 댓글을 삭제 하시겠습니까?')) {
       axios.delete({
          type: 'POST',
          url: '/post_cancel',

          data: {
             post_num_give: post_num,
          },
          success: function (response) {
             alert(response['msg']);
             window.location.href = '/';
          },
       });
    } else {
       return;
    }
}

export default DeletePost;