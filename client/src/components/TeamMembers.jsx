import { useQuery } from "@apollo/client";
import TeamMemberRow from "./TeamMemberRow";
import Spinner from "./Spinner";
import { GET_TEAMMEMBERS } from "../queries/teammemberQueries";
import AddTeamMemberModal from "../components/AddTeamMemberModal";

export default function TeamMembers() {
  const { loading, error, data } = useQuery(GET_TEAMMEMBERS);

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      <div className="d-flex justify-content-between">
        <h2>Team</h2>
        <AddTeamMemberModal />
      </div>
      {!loading && !error && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Designation</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.teammembers.map((teammember) => (
              <TeamMemberRow key={teammember.id} teammember={teammember} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
