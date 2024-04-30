import { createClient } from 'contentful';
import React from 'react'

function ClientGenerator() {
 return createClient({
    space:"gtcwaiarb0xp",
    accessToken: "HBtfkbm6DU-SoSUr3hSQWyD6ShxHzvr3cae7meeZ31w",
  });
}

export default ClientGenerator;
