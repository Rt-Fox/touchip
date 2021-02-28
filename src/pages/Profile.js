import React, {useEffect, useState, useContext} from 'react';
import {useParams} from 'react-router-dom'
import {retrieveCard} from "../http/fieldsApi";
import Fields from "../components/Fields";
import {useHistory} from "react-router-dom"
import {NEW_FIELDS} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Profile = observer(() => {
    // let user = {
    //     "id": 1,
    //     "owner": "testuser",
    //     "page_path": "testtest",
    //     "photo": null,
    //     "delimiter": "fancier",
    //     "fields": [
    //         {
    //             "id": 1,
    //             "title": "facebook",
    //             "value": "facebook kekich kekich kekich kekich kekich",
    //             "link": "https://instagram.com/kekich",
    //             "order": 1
    //         },
    //         {
    //             "id": 2,
    //             "title": "twitter",
    //             "value": "twitter",
    //             "link": "http://instagram.com/kekl",
    //             "order": 2
    //         },
    //         {
    //             "id": 3,
    //             "title": "tiktok",
    //             "value": "tiktok",
    //             "link": "https://instagram.com/kekich",
    //             "order": 3
    //         },
    //         {
    //             "id": 4,
    //             "title": "vk",
    //             "value": "vk",
    //             "link": "http://twitter.com/kekw",
    //             "order": 4
    //         },
    //         {
    //             "id": 5,
    //             "title": "instagram",
    //             "value": "instagram",
    //             "link": "https://instagram.com/kekich",
    //             "order": 5
    //         },
    //         {
    //             "id": 6,
    //             "title": "telegram",
    //             "value": "telegram",
    //             "link": "http://twitter.com/kekw",
    //             "order": 6
    //         },
    //         {
    //             "id": 7,
    //             "title": "youtube",
    //             "value": "youtube",
    //             "link": "http://twitter.com/kekw",
    //             "order": 7
    //         },
    //         {
    //             "id": 8,
    //             "title": "line-4",
    //             "value": "",
    //             "link": "",
    //             "order": 8
    //         },
    //         {
    //             "id": 9,
    //             "title": "line-3",
    //             "value": "",
    //             "link": "",
    //             "order": 9
    //         },
    //         {
    //             "id": 10,
    //             "title": "line-2",
    //             "value": "",
    //             "link": "",
    //             "order": 10
    //         },
    //         {
    //             "id": 11,
    //             "title": "line-1",
    //             "value": "",
    //             "link": "",
    //             "order": 11
    //         },
    //         {
    //             "id": 12,
    //             "title": "text",
    //             "value": "Я вот что-то пишу блинб? большой логичынй текст",
    //             "link": "",
    //             "order": 12
    //         },
    //         {
    //             "id": 13,
    //             "title": "mail",
    //             "value": "mail",
    //             "link": "http://twitter.com/kekw",
    //             "order": 13
    //         },
    //         {
    //             "id": 14,
    //             "title": "map",
    //             "value": "map",
    //             "link": "http://twitter.com/kekw",
    //             "order": 14
    //         },
    //         {
    //             "id": 15,
    //             "title": "web",
    //             "value": "web",
    //             "link": "http://twitter.com/kekw",
    //             "order": 15
    //         },
    //         {
    //             "id": 16,
    //             "title": "phone",
    //             "value": "phone",
    //             "link": "tel:899",
    //             "order": 16
    //         }
    //     ]
    // }
    const {cards, fields} = useContext(Context)
    const [users, setUsers] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        retrieveCard(id).then(data => setUsers(data))
    }, [])
    const history = useHistory()
    return (
        <div className="container mt-5">
            <div className="row d-flex flex-column align-items-center">
                <div className="element-photo">
                    <img src={cards.photo} alt=""/>
                </div>
                <h2 className="">
                    <input
                        type="text"
                        value={cards.owner}
                    />
                </h2>
                <div className="col-4">
                    <Fields key={cards.id} props={fields}/>
                </div>
                <div className="col-4">
                    <button onClick={() => history.push(NEW_FIELDS)} className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><div className='krest'></div></button>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                         aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    ...
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Profile;