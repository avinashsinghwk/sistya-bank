"use client";

import UserDetails, { UserDetailsResponse } from "@/actions/UserDetails";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { UserDetailsComponent } from "@/components/UserDetailsComponent";
import { UserDetailsComponentSkeleton } from "@/components/custom/UserDetailsComponentSkleton";

const AccountPage = () => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState<boolean>(true);
  const [userDetails, setUserDetails] = useState<UserDetailsResponse | null>(
    null,
  );

  useEffect(() => {
    async function fetchAccountDetails() {
      if (!session || !session.user || !session.user.id) {
        setLoading(false);
        return;
      }
      const res = await UserDetails(session.user.id);
      if (res.success && res.userDetails) {
        setUserDetails(res.userDetails);
      }
      setLoading(false);
    }

    fetchAccountDetails();
  }, [session]);

  return (
    <div>
      {loading ? (
        <UserDetailsComponentSkeleton />
      ) : (
        <UserDetailsComponent userDetails={userDetails} />
      )}
    </div>
  );
};

export default AccountPage;
