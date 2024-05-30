import { createContext, useState, ReactNode } from "react";

export type Status = "Upcoming" | "Completed" | "Cancelled";

interface OrderServiceContextProps {
  applianceService: string[];
  setApplianceService: (applianceService: string[]) => void;
  service: string;
  setService: (service: string) => void;
  category: string;
  setCategory: (category: string) => void;
  worker: string;
  setWorker: (worker: string) => void;
  date: string;
  setDate: (date: string) => void;
  workingHours: number;
  setWorkingHours: (workingHours: number) => void;
  startTime: string;
  setStartTime: (startTime: string) => void;
  promoCode: string;
  setPromoCode: (promoCode: string) => void;
  promo: number;
  setPromo: (promo: number) => void;
  fullAddress: string;
  setFullAddress: (fullAddress: string) => void;
  province: string;
  setProvince: (province: string) => void;
  city: string;
  setCity: (city: string) => void;
  subDistrict: string;
  setSubDistrict: (subDistrict: string) => void;
  postCode: string;
  setPostCode: (postCode: string) => void;
  note: string;
  setNote: (note: string) => void;
  paymentMethod: string;
  setPaymentMethod: (paymentMethod: string) => void;
  basePrice: number;
  setBasePrice: (basePrice: number) => void;
  price: number;
  setPrice: (price: number) => void;
  status: Status;
  setStatus: (status: Status) => void;
  rating: number;
  setRating: (rating: number) => void;
  reviews: number;
  setReviews: (reviews: number) => void;
}

const defaultValues: OrderServiceContextProps = {
  applianceService: [],
  setApplianceService: () => {},
  service: "",
  setService: () => {},
  category: "",
  setCategory: () => {},
  worker: "",
  setWorker: () => {},
  date: "",
  setDate: () => {},
  workingHours: 0,
  setWorkingHours: () => {},
  startTime: "",
  setStartTime: () => {},
  promoCode: "",
  setPromoCode: () => {},
  promo: 0,
  setPromo: () => {},
  fullAddress: "",
  setFullAddress: () => {},
  province: "",
  setProvince: () => {},
  city: "",
  setCity: () => {},
  subDistrict: "",
  setSubDistrict: () => {},
  postCode: "",
  setPostCode: () => {},
  note: "",
  setNote: () => {},
  paymentMethod: "",
  setPaymentMethod: () => {},
  basePrice: 0,
  setBasePrice: () => {},
  price: 0,
  setPrice: () => {},
  status: "Upcoming",
  setStatus: () => {},
  rating: 0,
  setRating: () => {},
  reviews: 0,
  setReviews: () => {},
};

export const OrderServiceContext =
  createContext<OrderServiceContextProps>(defaultValues);

const OrderServiceContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [applianceService, setApplianceService] = useState<string[]>([]);
  const [service, setService] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [worker, setWorker] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [workingHours, setWorkingHours] = useState<number>(0);
  const [startTime, setStartTime] = useState<string>("");
  const [promoCode, setPromoCode] = useState<string>("");
  const [promo, setPromo] = useState<number>(0);
  const [fullAddress, setFullAddress] = useState<string>("");
  const [province, setProvince] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [subDistrict, setSubDistrict] = useState<string>("");
  const [postCode, setPostCode] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [basePrice, setBasePrice] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [status, setStatus] = useState<Status>("Upcoming");
  const [rating, setRating] = useState<number>(0);
  const [reviews, setReviews] = useState<number>(0);

  const value = {
    applianceService,
    setApplianceService,
    service,
    setService,
    category,
    setCategory,
    worker,
    setWorker,
    date,
    setDate,
    workingHours,
    setWorkingHours,
    startTime,
    setStartTime,
    promoCode,
    setPromoCode,
    promo,
    setPromo,
    fullAddress,
    setFullAddress,
    province,
    setProvince,
    city,
    setCity,
    subDistrict,
    setSubDistrict,
    postCode,
    setPostCode,
    note,
    setNote,
    paymentMethod,
    setPaymentMethod,
    basePrice,
    setBasePrice,
    price,
    setPrice,
    status,
    setStatus,
    rating,
    setRating,
    reviews,
    setReviews,
  };

  return (
    <OrderServiceContext.Provider value={value}>
      {children}
    </OrderServiceContext.Provider>
  );
};

export default OrderServiceContextProvider;
