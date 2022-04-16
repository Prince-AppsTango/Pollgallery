import React,{useCallback,useState} from 'react'
import enTranslations from '@shopify/polaris/locales/en.json';
import {
    ArrowRightMinor
  } from '@shopify/polaris-icons';
import {
    AppProvider,
    Badge,
    Button,
    Heading,
    Card,
    Stack,
    RadioButton,
    Layout,
    TextField,
    Tooltip,
    TextStyle,
    Icon
  } from "@shopify/polaris";
export default function PromoCode() {
    const [value, setValue] = useState('');

    const handleChange = useCallback((newValue) => setValue(newValue), []);
    return (
        <AppProvider i18n={enTranslations}>
            <Stack>
             <TextField placeholder="Enter Code" value={value} onChange={handleChange} />
              <Button  onClick={()=>alert('Enter a Coupon Code!!')} icon={ArrowRightMinor}></Button>
              </Stack>
      </AppProvider>
    )
}
