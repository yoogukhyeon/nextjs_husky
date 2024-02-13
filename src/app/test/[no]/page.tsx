import React from 'react';

type Props = {
  params: {
    no: number | string;
  };
};

export default function Page({ params }: Props) {
  const { no } = params;
  return <span>slug: {no}</span>;
}
