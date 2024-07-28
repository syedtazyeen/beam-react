interface Event {
    _id: string;
    name: string;
    desc: string;
    streamKey?: string;
    creatorId: string;
    categoryId?: string;
    status: 'live' | 'offline';
    eventAt : string;
}


export default Event