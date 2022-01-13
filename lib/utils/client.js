const { createClient } = require('@supabase/supabase-js') ;

// possible back end service
module.exports = () => {

  const client = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
  );

  const parseData = ({ data, error }) => {
    if (error) throw error;
    return data;
  };

  return { client, parseData };
};
