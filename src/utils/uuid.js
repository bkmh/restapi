import uuid4 from 'uuid4'

const uuid = () => {
    const tokens = uuid4().split('-')

    // 순서 : 32145 의 순서로 조립하면 indexing 성능 보장
    return tokens[2] + tokens[1] + tokens[0] + tokens[3] + tokens[4]
}

export {
    uuid
}