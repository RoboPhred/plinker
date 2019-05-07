import { connect } from "react-redux";

import { pick } from "lodash";

import { identities } from "@/identity";

import { AppState } from "@/state";

import { emittersByIdSelector } from "@/services/boing/selectors/emitters";

function mapStateToProps(state: AppState) {
  const emittersById = emittersByIdSelector(state);
  const emitterIds = identities(emittersById);
  const emitters = emitterIds
    .map(id => emittersById[id])
    .map(emitter => pick(emitter, ["id"]));

  return {
    emitters
  };
}

export default connect(mapStateToProps);
