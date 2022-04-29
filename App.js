import * as React from "react";
import { NativeBaseProvider, Button, FormControl, Stack, TextArea, WarningOutlineIcon, Box, Text, Center, View, Input, Heading, Alert } from 'native-base';
import { useState, useEffect } from "react";
import axios from "axios";
export default function App() {
  const [formData, setData] = React.useState({});
  function SendMail(){
    axios
        .get("https://birdra1n.x10.bz/SecretMail/api/send/", {
          params: {
            to: formData.destinatario,
            subject: formData.assunto,
            message: formData.msg
          },
        })
        .then(function (response) {
         if(response.data.message_success != undefined){
           alert("Seu email foi enviado com sucesso!")
         }
        });
  }
  return (
    <NativeBaseProvider >
      <Box flex={1} bg="#313131" alignItems="center" justifyContent="center">
        <Box bg="light.50" w={'85%'} maxW={300} h={'60%'} maxH={400} rounded="lg">
          <Center>
            <Heading>SecretMail</Heading>
            <Text>
              Obrigado por usar nossa ferramenta.

            </Text>
          </Center>
          <FormControl >
            <Stack mx="4">
              <FormControl.Label>Destinatário</FormControl.Label>
              <Input type="email" placeholder=""
              onChangeText={value => setData({ ...formData,
                destinatario: value
              })}
               />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Você esqueceu de preencher o campo do destinatário
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          <FormControl >
            <Stack mx="4">
              <FormControl.Label>Assunto</FormControl.Label>
              <Input type="text" placeholder="" 
                onChangeText={value => setData({ ...formData,
                  assunto: value
                })}/>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Você esqueceu de preencher o campo do destinatário
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          <FormControl >
            <Stack mx="4">
              <FormControl.Label>Mensagem</FormControl.Label>
              <TextArea type="text" placeholder="" 
                onChangeText={value => setData({ ...formData,
                  msg: value
                })}/>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Você esqueceu de preencher o campo do destinatário
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          <Center>
            <Button onPress={()=>SendMail()} mt="7" w={'70%'} colorScheme="light">
              Enviar
            </Button>
          </Center>
        </Box>

      </Box>
    </NativeBaseProvider>
  );
}


