import React, {useState} from 'react'
import {Article} from '../../templates'

export default function ArticleWriteForm(){

    return ( <Article>
                <table>
                    <tr><td>
                <div class="container" role="main">
                    <h2>Article Write Form</h2>
                    <form name="form" id="form" role="form" method="post" action="${pageContext.request.contextPath}/board/saveBoard">
                        <div class="mb-3">
                            <label for="title">제목</label>
                            <input type="text" class="form-control" name="title" id="title" placeholder="제목을 입력해 주세요"/>
                        </div>
                        <div class="mb-3">
                            <label for="reg_id">작성자</label>
                            <input type="text" class="form-control" name="reg_id" id="reg_id" placeholder="이름을 입력해 주세요"/>
                        </div>
                        <div class="mb-3">
                            <label for="content">내용</label>
                            <textarea class="form-control" rows="5" name="content" id="content" placeholder="내용을 입력해 주세요" ></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="tag">TAG</label>
                            <input type="text" class="form-control" name="tag" id="tag" placeholder="태그를 입력해 주세요"/>
                        </div>
                    </form>
                    <div >
                        <button type="button" class="btn btn-sm btn-primary" id="btnSave">저장</button>
                        <button type="button" class="btn btn-sm btn-primary" id="btnList">목록</button>
                    </div>
                </div></td></tr>
                </table>
	</Article>)
}