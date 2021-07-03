export interface Videoyt {

        etag: string;
        id: Channel;
        kind: string;
        snippet: Snippet;
}

export interface Channel {
        channelId: number;
        kind: string;
}
export interface Snippet {
        channelId: string;
        channelTitle: string;
        description: string;
        liveBroadcastContent: string;
        publishedTime: string;
        publishedAt: string;
        thumbnails: Thumbnails;
        title: string;
}
export interface Thumbnails {
        default: Uri;
        high: Uri;
        medium: Uri;
}
export interface Uri {
        url: string;
}
