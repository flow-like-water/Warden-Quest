import { Vote } from '../dto/vote';

export class VoteMapper {

    static rawVoteToVote = (rawVote: any) => {
        const vote: Vote = {
            gaugeAdress: rawVote.gauge_addr,
            user: rawVote.user,
            time: rawVote.time,
            weight: rawVote.weight
        };

        return vote;

    }
}
