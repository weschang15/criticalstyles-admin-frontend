import React from "react";
import { useQuery } from "react-apollo";
import { AdminLayout } from "../../Components/Layouts/Layouts";
import UtilityNav from "../../Components/Navbar/UtilityNav";
import Pagination from "../../Components/Pagination/Pagination";
import AddApiKey from "../../Components/Toggles/AddApiKey";
import Tokens from "../../Components/Tokens/Tokens";
import { PAGINATION_LIMIT } from "../../config/pagination";
import { Section, SectionTitle } from "../../Elements";
import { GET_TOKENS } from "../../Queries";

function Account() {
  const { data, loading, fetchMore } = useQuery(GET_TOKENS, {
    variables: {
      input: {
        skip: 0,
        limit: PAGINATION_LIMIT,
      },
    },
  });

  const loadMore = (fn) => (skip) =>
    fn({
      variables: {
        input: { skip, limit: PAGINATION_LIMIT },
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          ...prev,
          tokens: {
            ...fetchMoreResult.tokens,
          },
        };
      },
    });

  const tokens = ((data && data.tokens) || {}).documents || [];
  const queryInfo = ((data && data.tokens) || {}).queryInfo || {};

  return (
    <AdminLayout>
      <UtilityNav>
        <AddApiKey />
      </UtilityNav>
      <Section>
        <SectionTitle>API Keys</SectionTitle>
        <Tokens loading={loading} tokens={tokens} />
        {!loading && (
          <Pagination
            totalPages={queryInfo.totalPages}
            fetchMore={loadMore(fetchMore)}
          />
        )}
      </Section>
    </AdminLayout>
  );
}

export default Account;
