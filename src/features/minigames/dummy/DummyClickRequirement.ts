import {Requirement} from "../../../engine/requirements/Requirement";
import {App} from "../../../App";

export class DummyClickRequirement extends Requirement {
    target: number;

    constructor(target: number) {
        super();
        this.target = target;
    }

    getActualValue(): number {
        return App.game.miniGames.dummy.clicks;
    }

    getTargetValue(): number {
        return this.target;
    }

    lockedReason(): string {
        return "Needs more clicks";
    }


}