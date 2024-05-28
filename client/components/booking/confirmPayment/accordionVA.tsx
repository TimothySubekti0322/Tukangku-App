import { View, Text } from "react-native";
import React, { useState } from "react";
import { List } from "react-native-paper";

interface AccordionVAProps {
  bank: string;
}

const AccordionVA: React.FC<AccordionVAProps> = ({ bank }) => {
  const bankUrl =
    bank == "BCA"
      ? "https://www.klikbca.com/"
      : bank == "BNI"
      ? "https://ibank.bni.co.id/"
      : "https://ib.bri.co.id/";
  return (
    <View className="px-4 pb-4 bg-white rounded-xl border-[0.5px] border-[#7D7D7D]">
      <List.Section>
        <List.Accordion
          title={`Transfer Via ATM ${bank}`}
          style={{
            padding: 0,
            backgroundColor: "white",
            borderBottomWidth: 1,
            borderBottomColor: "#C2C2C2",
          }}
          titleStyle={{
            marginLeft: -12,
            fontFamily: "InterSemiBold",
            fontSize: 14,
            color: "black",
          }}
        >
          <View className="w-full pt-4 gap-y-2">
            <Text className="text-[12px] text-[#7D7D7D]">
              1. Masukkan kartu {bank}, lalu masukkan PIN-mu.
            </Text>
            <Text className="text-[12px] text-[#7D7D7D]">
              2. Pilih Menu Lainnya &gt; Transfer.
            </Text>
            <Text className="text-[12px] text-[#7D7D7D]">
              3. Pilih jenis rekening yang akan kamu gunakan (contoh: Rekening
              Tabungan).
            </Text>
            <Text className="text-[12px] text-[#7D7D7D]">
              4. Pilih Virtual Account Billing dan masukkan nomor virtual
              account yang tertera lalu klik OK.
            </Text>
            <Text className="text-[12px] text-[#7D7D7D]">
              5. Di rincian pembayaran, pastikan detail pembayaran sudah sesuai.
            </Text>
            <Text className="text-[12px] text-[#7D7D7D]">
              6. Selesaikan pembayaran sesuai instruksi yang diberikan.
            </Text>
            <Text className="text-[12px] text-[#7D7D7D]">
              7. Setelah pembayaran selesai, pesananmu akan segera diproses.
              Simpan notifikasi pembayaranmu sebagai referensi.
            </Text>
          </View>
        </List.Accordion>
        <List.Accordion
          title={`Transfer via ${bank} Mobile`}
          style={{
            padding: 0,
            backgroundColor: "white",
            borderBottomWidth: 1,
            borderBottomColor: "#C2C2C2",
          }}
          titleStyle={{
            marginLeft: -12,
            fontFamily: "InterSemiBold",
            fontSize: 14,
            color: "black",
          }}
        >
          <View className="w-full pt-4 gap-y-2">
            <Text className="text-[12px] text-[#7D7D7D]">
              1. Buka aplikasi {bank} Mobile, lalu masuk dengan akunmu.
            </Text>
            <Text className="text-[12px] text-[#7D7D7D]">
              2. Pilih Transfer &gt; Virtual Account Billing. Lalu pilih
              rekening debetmu.
            </Text>
            <Text className="text-[12px] text-[#7D7D7D]">
              3. Masukkan nomor virtual account yang tertera, lalu klik OK.
            </Text>
            <Text className="text-[12px] text-[#7D7D7D]">
              4. Di rincian pembayaran, pastikan detail pembayaran sudah sesuai.
            </Text>
            <Text className="text-[12px] text-[#7D7D7D]">
              5. Masukkan PIN-mu.
            </Text>
            <Text className="text-[12px] text-[#7D7D7D]">
              6. Setelah pembayaran selesai, pesananmu akan segera diproses.
              Simpan notifikasi pembayaranmu sebagai referensi.
            </Text>
          </View>
        </List.Accordion>
        <List.Accordion
          title={`Transfer via ${bank} Internet Banking`}
          style={{
            padding: 0,
            backgroundColor: "white",
            borderBottomWidth: 1,
            borderBottomColor: "#C2C2C2",
          }}
          titleStyle={{
            marginLeft: -12,
            fontFamily: "InterSemiBold",
            fontSize: 14,
            color: "black",
          }}
        >
          <View className="w-full pt-4 gap-y-2">
            <Text className="text-[12px] text-[#7D7D7D]">
              1. Buka halaman Internet Banking {bank} ({bankUrl}) melalui
              browser, lalu masuk dengan akunmu.
            </Text>
            <Text className="text-[12px] text-[#7D7D7D]">
              2. Pilih menu Transfer &gt; Virtual Account Billing.
            </Text>
            <Text className="text-[12px] text-[#7D7D7D]">
              3. Masukkan nomor virtual account yang tertera lalu klik OK.
            </Text>
            <Text className="text-[12px] text-[#7D7D7D]">
              4. Di rincian pembayaran, pastikan detail pembayaran sudah sesuai.
            </Text>
            <Text className="text-[12px] text-[#7D7D7D]">
              5. Masukkan kode otentikasi token.
            </Text>
            <Text className="text-[12px] text-[#7D7D7D]">
              6. Setelah pembayaran selesai, pesananmu akan segera diproses.
              Simpan notifikasi pembayaranmu sebagai referensi.
            </Text>
          </View>
        </List.Accordion>
      </List.Section>
    </View>
  );
};

export default AccordionVA;
